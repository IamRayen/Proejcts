import smartHome.Switch;
import smartHome.Lamp;
import smartHome.Button;
import smartHome.Heater;
import smartHome.CoffeeMachine;
import smartHome.PowerDevice;

public class main{
    public static void main(String[] args){

        PowerDevice[] systems = {
                new Button(new CoffeeMachine()),
                new Switch(new Lamp("Schlafzimmerlicht")),
                new Switch(new Lamp("Badezimmerlicht")),
                new Switch(new Heater("Duschwasserheizsystem"))
        };

        for(PowerDevice system : systems){
            system.poll();
        };

        for(PowerDevice system : systems){
            if(system instanceof Switch){
                system.poll();
            }
        }

    }
}