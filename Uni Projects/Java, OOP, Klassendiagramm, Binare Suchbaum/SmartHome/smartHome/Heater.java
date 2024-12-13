package smartHome;

public class Heater implements Device{
    
    String name;

    public Heater(String name) {
        this.name = name;
    }

    @Override
    public void run(){
        System.out.println("Heater is on!");
    };

    @Override
    public void stop(){
        System.out.println("Heater is off!");
    };
}