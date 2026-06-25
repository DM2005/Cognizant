class Logger {

    private static Logger instance;

    private Logger() {
        System.out.println("Logger Instance Created.");
    }

    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("LOG: " + message);
    }
}

public class Exercise1 {

    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        logger1.log("Application Started");

        Logger logger2 = Logger.getInstance();
        logger2.log("User Logged In");

        Logger logger3 = Logger.getInstance();
        logger3.log("Application Closed");

        System.out.println("\nChecking Singleton Instances:");

        System.out.println("logger1 HashCode: " + logger1.hashCode());
        System.out.println("logger2 HashCode: " + logger2.hashCode());
        System.out.println("logger3 HashCode: " + logger3.hashCode());

        if (logger1 == logger2 && logger2 == logger3) {
            System.out.println("\nOnly one Logger instance exists.");
        } else {
            System.out.println("\nMultiple Logger instances exist.");
        }
    }
}