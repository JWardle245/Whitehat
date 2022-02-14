import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

public class KeyboardShortcutSrv {

    private List<KeyboardShortcutDTO> reservedKeys = new ArrayList<KeyboardShortcutDTO>();

    private KeyboardShortcutRepository keyboardShortcutRepository;

    public KeyboardShortcutSrv(KeyboardShortcutRepository repo) {
        this.keyboardShortcutRepository = repo;
    }

    public boolean query(String query) {
        return keyboardShortcutRepository.isAvailable();
    }

    //Below is the actual 'get list' method for KeyboardShortcutSrv

    public KeyboardShortcutResultDTO getKeyboardShortcutsList(HttpServletRequest request) {


        KeyboardShortcutResultDTO result = new KeyboardShortcutResultDTO();


        SystemInfo systemInfo = SessionHelper.getSystemInfo(request.getSession(), 1);
        String userId = systemInfo.getUserID().trim();

        if(userId != null) {
            userId = userId.toLowerCase();
        }

        List<KeyboardShortcutDTO> list = keyboardShortcutRepository.retrieveKeyboardShortcutsByUser(userId);

        list.addAll(reservedKeys);

        result.setKeyboardShortcutsList(list);

        return result;
    }
}