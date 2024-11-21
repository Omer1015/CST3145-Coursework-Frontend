const apiUrl = "http://localhost:3000/collections/Products"; // Change URL if needed

// Fetch all products
async function fetchProducts() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
