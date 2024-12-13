package smartHome;

public class Lamp implements Device{
    
    String name;

    public Lamp(String name){
        this.name = name;
    }

    @Override
    public void run(){
        System.out.println(name + " is on!");
    };

    @Override
    public void stop(){
        System.out.println(name + " is off!");
    };
}