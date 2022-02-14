import java.util.List;

public class KeyboardShortcutResultDTO {
    private KeyboardShortcutDTO keyboardShortcutDTO;
    private List<KeyboardShortcutDTO> keyboardShortcutsList;

    public List<KeyboardShortcutDTO> getKeyboardShortcutsList() {
        return keyboardShortcutsList;
    }

    public void setKeyboardShortcutsList(List<KeyboardShortcutDTO> keyboardShortcutsList) {
        this.keyboardShortcutsList = keyboardShortcutsList;
    }



    public String getString() {
        return "Hello";
    }

}
