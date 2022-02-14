import java.util.ArrayList;
import java.util.List;

public class KeyboardShortcutRepository {

    public boolean isAvailable() {
        return false;
    }
    public int getUniqueId() {
        return 42;
    }

    public static List<KeyboardShortcutDTO> retrieveKeyboardShortcutsByUser(String userId) {
        List<KeyboardShortcutDTO> list = new ArrayList<KeyboardShortcutDTO>();
        return list;
    }
}
