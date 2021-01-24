<?php
$NODE_PATH="/home/ractivep/nodevenv/node/14/bin";
$NPX_PATH = "~/nodevenv/node/14/lib/bin";

$keys = parse_ini_file(realpath($_SERVER["DOCUMENT_ROOT"] . "/../keys/keys"));

$json = json_decode($_POST["payload"]);

$post_data = file_get_contents('php://input');

if ($json->repository->full_name === "ysulyma/ractive-player.org") {
  $signature = hash_hmac('sha1', $post_data, $keys["GITHUB_SECRET"]);
  if ("sha1=$signature" !== $_SERVER["HTTP_X_HUB_SIGNATURE"]) {
    fail();
  }
  `cd ~ && git pull && PATH=\$PATH:${NODE_PATH}:${NPX_PATH} && npx @11ty/eleventy --input content --output public_html 2>&1`;
} else {
  fail();
}

function fail() {
  http_response_code(403);
  die("Forbidden\n");
}
