# Interview Questions - Blog Task

## 1. Differences Between Interfaces and Types in TypeScript

In TypeScript, both `interface` and `type` are used to define the shape of objects. However, they have distinct purposes and differences:

### ✅ **1. Extensibility:**
- Interfaces can be extended using the `extends` keyword.
- Types can be extended using intersection (`&`).

```typescript
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}

const emp: Employee = { name: "Alice", employeeId: 101 };

// Using type with intersection
type User = { name: string };
type Admin = User & { adminId: number };

const admin: Admin = { name: "Bob", adminId: 1 };
```

### ✅ **2. Declaration Merging:**
- Interfaces can be merged by defining them multiple times.
- Types do not allow declaration merging.

```typescript
interface Person {
  age: number;
}

const person: Person = { name: "Alice", age: 30 };
```

### ✅ **3. Complex Types:**
- Types can define union, intersection, and conditional types, whereas interfaces are mainly for object structures.

```typescript
type StringOrNumber = string | number;
```

In summary, interfaces are best for defining object structures, while types provide more flexibility for complex type definitions.

---

## 2. Differences Between `any`, `unknown`, and `never` in TypeScript

### ✅ **1. `any` Type:**
- Disables type checking, allowing any value and operation.

```typescript
let value: any = "Hello";
value = 42;
console.log(value.toUpperCase());  // No error
```

### ✅ **2. `unknown` Type:**
- Safer than `any`. Requires type checking before performing operations.

```typescript
let data: unknown = "Hello";
if (typeof data === "string") {
  console.log(data.toUpperCase());  // Safe access
}
```

### ✅ **3. `never` Type:**
- Represents functions that never return a value or always throw errors.

```typescript
function throwError(message: string): never {
  throw new Error(message);
}
```

