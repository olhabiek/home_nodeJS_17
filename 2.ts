let id: string | number;

function displayId(id: string | number): string | number {
  if (typeof id === "string") {
    return id.toUpperCase();
  } else {
    return id * 10;
  }
}

id = "Alice";
console.log(displayId(id));

id = 777;
console.log(displayId(id));
