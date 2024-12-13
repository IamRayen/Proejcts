package smartHome;

public class CoffeeMachine implements Device{
    

    @Override
    public void run(){
        System.out.println("Coffeemachine is on!");
    };

    @Override
    public void stop(){
        System.out.println("Coffeemachine is off!");
    };
}