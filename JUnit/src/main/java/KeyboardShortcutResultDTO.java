import java.util.List;

public final class KeyboardShortcutResultDTO {
    private KeyboardShortcutDTO keyboardShortcutDTO;
    private List<KeyboardShortcutDTO> keyboardShortcutsList;

    public List<KeyboardShortcutDTO> getKeyboardShrtcutsList() {
        return keyboardShortcutsList;
    }
    public void setKeyboardShortcutsList(List<KeyboardShortcutDTO> keyboardShortcutsList) {
        this.keyboardShortcutsList = keyboardShortcutsList;
    }

}
