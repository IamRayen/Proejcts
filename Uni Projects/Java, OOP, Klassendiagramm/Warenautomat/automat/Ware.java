package automat;

//Ab hier soll die Ware implementiert werden

public class Ware {
    private int id;
    private String name;
    private int price;

    public Ware(int id, String name, int price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getPrice() {
        return price;
    }

    public String toString() {
        return "ID: " + id + ", Name: " + name + ", Preis: " + price + " Cent";
    }
}