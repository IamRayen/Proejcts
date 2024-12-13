package smartHome;

abstract public class PowerDevice {
    public Device device;

    public PowerDevice(Device device) {
        this.device = device;
    }

    public abstract void poll();
}