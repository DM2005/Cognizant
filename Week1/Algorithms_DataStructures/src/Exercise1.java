import java.util.HashMap;
import java.util.Map;

// Product Class
class Product {
    private int productId;
    private String productName;
    private int quantity;
    private double price;

    public Product(int productId, String productName, int quantity, double price) {
        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Product ID: " + productId +
                ", Name: " + productName +
                ", Quantity: " + quantity +
                ", Price: ₹" + price;
    }
}

// Inventory Management System
class InventoryManager {
    private Map<Integer, Product> inventory;

    public InventoryManager() {
        inventory = new HashMap<>();
    }

    // Add Product
    public void addProduct(Product product) {
        inventory.put(product.getProductId(), product);
        System.out.println("Product Added Successfully.");
    }

    // Update Product
    public void updateProduct(int productId, String name, int quantity, double price) {
        Product product = inventory.get(productId);

        if (product != null) {
            product.setProductName(name);
            product.setQuantity(quantity);
            product.setPrice(price);
            System.out.println("Product Updated Successfully.");
        } else {
            System.out.println("Product Not Found.");
        }
    }

    // Delete Product
    public void deleteProduct(int productId) {
        if (inventory.remove(productId) != null) {
            System.out.println("Product Deleted Successfully.");
        } else {
            System.out.println("Product Not Found.");
        }
    }

    // Display Inventory
    public void displayInventory() {
        if (inventory.isEmpty()) {
            System.out.println("Inventory is Empty.");
            return;
        }

        System.out.println("\nInventory Details:");
        for (Product product : inventory.values()) {
            System.out.println(product);
        }
    }
}

// Main Class
public class Exercise1 {
    public static void main(String[] args) {

        InventoryManager manager = new InventoryManager();

        // Add Products
        manager.addProduct(new Product(101, "Laptop", 20, 55000));
        manager.addProduct(new Product(102, "Mouse", 100, 500));
        manager.addProduct(new Product(103, "Keyboard", 50, 1200));

        manager.displayInventory();

        // Update Product
        manager.updateProduct(102, "Wireless Mouse", 120, 800);

        // Delete Product
        manager.deleteProduct(103);

        manager.displayInventory();
    }
}