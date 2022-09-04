export const getAllProducts = async () => {
  try {
    const users = await fetch('http://localhost:3000/products');
    const data = await users.json();
    return data;
  } catch (err) {
    return err.message;
  }
};
