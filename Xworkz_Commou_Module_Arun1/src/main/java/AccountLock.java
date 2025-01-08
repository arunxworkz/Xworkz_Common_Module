import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

public class AccountLock {
    private int attempts = 0;
    private LocalDateTime lockTime;
    private boolean isLocked = false;

    public String login(String password) {
        if (isLocked) {
            if (ChronoUnit.SECONDS.between(lockTime, LocalDateTime.now()) < 60) {
                return "Account is locked. Try again later.";
            } else {
                isLocked = false;
                attempts = 0;
            }
        }

        String correctPassword = "securepassword";  // Example password
        if (password.equals(correctPassword)) {
            attempts = 0;
            return "Login successful!";
        } else {
            attempts++;
            if (attempts >= 3) {
                isLocked = true;
                lockTime = LocalDateTime.now();
                return "Account locked due to too many failed attempts. Try again in 60 seconds.";
            }
            return "Incorrect password. " + (3 - attempts) + " attempts left.";
        }
    }

    public static void main(String[] args) {
        AccountLock account = new AccountLock();
        System.out.println(account.login("wrongpassword"));  // Incorrect password. 2 attempts left.
        System.out.println(account.login("wrongpassword"));  // Incorrect password. 1 attempt left.
        System.out.println(account.login("wrongpassword"));  // Account locked due to too many failed attempts. Try again in 60 seconds.
        try {
            Thread.sleep(60000);  // Wait for 60 seconds
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(account.login("securepassword"));  // Login successful!
    }
}
