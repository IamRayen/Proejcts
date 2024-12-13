package smartHome;

public class Button extends PowerDevice {

    public Button(Device device) {
        super(device);
    }

    public void poll() {
        device.run();
        device.stop();
    }

}