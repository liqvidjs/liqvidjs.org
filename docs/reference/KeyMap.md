## Static methods

```typescript
static canonize(seq: string): string;
```

```typescript
static identify(e: KeyboardEvent | React.KeyboardEvent<unknown>): string;
```
  
## Properties

```typescript
bind(seq: string, cb: (e: KeyboardEvent) => void): void;
```

```typescript
unbind(seq: string, cb: (e: KeyboardEvent) => void): void;
```

```typescript
getKeys(): string[];
```

```typescript
getHandlers(seq: string): ((e: KeyboardEvent) => void)[];
```

```typescript
handle(e: KeyboardEvent): void;
```
