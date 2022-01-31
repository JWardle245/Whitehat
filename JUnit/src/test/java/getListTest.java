import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class getListTest {

    @Mock
    KeyboardShortcutRepository repoMock;

    @Test
    public void testQuery()  {
        assertNotNull(repoMock);
        when(repoMock.isAvailable()).thenReturn(true);
        KeyboardShortcutSrv service  = new KeyboardShortcutSrv(repoMock);
        boolean check = service.query("* from service");
        assertTrue(check);
    }
}
