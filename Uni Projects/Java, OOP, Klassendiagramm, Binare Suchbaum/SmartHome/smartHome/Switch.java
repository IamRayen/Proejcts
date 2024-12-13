package smartHome;

public class Switch extends PowerDevice {
    private boolean isOn;

    public Switch(Device device) {
        super(device);
        this.isOn = false;
    }

    public void poll() {
        if (isOn) {
            device.stop();
        } else {
            device.run();
        }
        isOn = !isOn;
    }
}