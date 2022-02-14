import java.io.Serializable;

public class KeyboardShortcutDTO implements Serializable {
    private String keys;
    private String actions;
    private String description;
    private int reservedShortcutColumn;

    public KeyboardShortcutDTO(String keys, String actions, String description, int reservedShortcutColumn) {
        this.keys = keys;
        this.actions = actions;
        this.description = description;
        this.reservedShortcutColumn = reservedShortcutColumn;
    };

    public String getKeys() {
        return keys;
    }
}
