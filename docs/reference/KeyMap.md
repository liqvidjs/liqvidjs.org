## Static methods

### `canonize()`
```typescript
static canonize(seq: string): string;
```

### `identify()`
```typescript
static identify(e: KeyboardEvent | React.KeyboardEvent<unknown>): string;
```
  
## Methods

### `bind()`
```typescript
bind(seq: string, cb: (e: KeyboardEvent) => void): void;
```

### `unbind()`
```typescript
unbind(seq: string, cb: (e: KeyboardEvent) => void): void;
```

### `getKeys()`
```typescript
getKeys(): string[];
```

### `getHandlers()`
```typescript
getHandlers(seq: string): ((e: KeyboardEvent) => void)[];
```

### `handle()`
```typescript
handle(e: KeyboardEvent): void;
```
