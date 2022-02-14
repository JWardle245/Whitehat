import static org.mockito.Mockito.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.powermock.api.mockito.PowerMockito;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

//@ExtendWith(MockitoExtension.class)
@RunWith(PowerMockRunner.class)
@PrepareForTest({KeyboardShortcutSrv.class, SessionHelper.class, SystemInfo.class, KeyboardShortcutRepository.class})
public class serviceTests {

    @Mock
    KeyboardShortcutRepository repoMock;

    @Mock
    HttpServletRequest mockedRequest;

    private KeyboardShortcutResultDTO dummyInstance = mock(KeyboardShortcutResultDTO.class);

    @Test
    public void testGetKeyboardShortcuts() throws Exception {

        //Declare list of shortcuts to be returned by the mocked repository
        ArrayList<KeyboardShortcutDTO> shortcuts = new ArrayList<KeyboardShortcutDTO>();
        KeyboardShortcutDTO shortcut = new KeyboardShortcutDTO("CTRL+K", "SFSM", "Navigates to SFSM screen", 0);
        shortcuts.add(shortcut);

        // Mock SessionHelper
        PowerMockito.mockStatic(SessionHelper.class);
        Mockito.when(SessionHelper.getSystemInfo(null, 1)).thenReturn(new SystemInfo());

        // Mock SystemInfo
        PowerMockito.mockStatic(SystemInfo.class);
        Mockito.when(SystemInfo.getUserID()).thenReturn("jw86694");

        // Mock KeyboardShortcutRepository
        PowerMockito.mockStatic(KeyboardShortcutRepository.class);
        Mockito.when(KeyboardShortcutRepository.retrieveKeyboardShortcutsByUser("jw86694")).thenReturn(shortcuts);

        // Mock the KeyboardShortcutResultDTO constructor
        PowerMockito.whenNew(KeyboardShortcutResultDTO.class).withNoArguments().thenReturn(dummyInstance);


        KeyboardShortcutSrv service = new KeyboardShortcutSrv(repoMock);

        // Call the method we are testing
        KeyboardShortcutResultDTO result = service.getKeyboardShortcutsList(mockedRequest);

        //Verify that the method gets the shortcuts list from the repository and stores it in ResultDTO
        verify(dummyInstance, times(1)).setKeyboardShortcutsList(shortcuts);
    }

    /*
    @Test
    public void testPowerMockito() throws Exception {

        // mock behaviour of the KeyboardShortcutResultDTO constructor
        PowerMockito.whenNew(KeyboardShortcutResultDTO.class).withNoArguments().thenReturn(dummyInstance);

        // mock the behaviour of the SessionHelper static method
        PowerMockito.mockStatic(SessionHelper.class);
        Mockito.when(SessionHelper.getSystemInfo(null, 1)).thenReturn(new SystemInfo());

        KeyboardShortcutSrv service = new KeyboardShortcutSrv(repoMock);

        KeyboardShortcutResultDTO result = service.getKeyboardShortcutsList(mockedRequest);

        verify(dummyInstance, times(1)).setKeyboardShortcutsList(anyList());
    }
*/
/*
    @Test
    public void testQuery() {
        assertNotNull(repoMock);
        when(repoMock.isAvailable()).thenReturn(true);
        KeyboardShortcutSrv service = new KeyboardShortcutSrv(repoMock);
        boolean check = service.query("* from service");
        assertTrue(check);
    }

    @Test
    void givenStaticMethodWithNoArgs_whenMocked_thenReturnsMockSuccessfully() {
        assertEquals(StaticUtils.name(), ("Baeldung"));

        try (MockedStatic<StaticUtils> utilities = Mockito.mockStatic(StaticUtils.class)) {
            utilities.when(StaticUtils::name).thenReturn("Eugen");
            assertEquals(StaticUtils.name(), ("Eugen"));
        }

        assertEquals(StaticUtils.name(), ("Baeldung"));
    }
*/
/*
        @Test
        public void testGetKeyboardShortcutsList() {

            ArrayList<KeyboardShortcutDTO> shortcuts = new ArrayList<KeyboardShortcutDTO>();
            KeyboardShortcutDTO shortcut = new KeyboardShortcutDTO("CTRL+K", "SFSM", "Navigates to SFSM screen", 0);
            shortcuts.add(shortcut);

            try (// Mock SystemInfo
                 MockedStatic<SystemInfo> mockedSystemInfo = Mockito.mockStatic(SystemInfo.class);
                 // Mock SessionHelper
                 MockedStatic<SessionHelper> mockedSessionHelper = Mockito.mockStatic(SessionHelper.class);
                 // Mock Repository
                 MockedStatic<KeyboardShortcutRepository> mockedRepository = Mockito.mockStatic(KeyboardShortcutRepository.class);

                 // Mock KeyboardShortcutResultDTO construction
                 MockedConstruction mockedConstructor = mockConstruction(KeyboardShortcutResultDTO.class, (mock, context) -> {
                            // Where the code used to be located
                         }
                 )) {
                // The moved code:
                // Mock SessionHelper getSystemInfo() method
                mockedSessionHelper.when(() -> SessionHelper.getSystemInfo(null, 1)).thenReturn(new SystemInfo());
                // Mock SystemInfo getUserID() method
                mockedSystemInfo.when(() -> SystemInfo.getUserID()).thenReturn("j123");
                // Mock Repository retrieveKeyboardShortcutsList() method
                mockedRepository.when(() -> KeyboardShortcutRepository.retrieveKeyboardShortcutsByUser("j123")).thenReturn(shortcuts);

                KeyboardShortcutSrv service = new KeyboardShortcutSrv(repoMock);

                // Call the method, then convert return value from ResultDTO into List
                List<KeyboardShortcutDTO> result = service.getKeyboardShortcutsList(mockedRequest).getKeyboardShortcutsList();

                // Compare keys of first shortcutDTO from list, to expected
                assertEquals("CTRL+K", result.get(0).getKeys());
            }
        }
*/
/*
        @Test
        void testSpy() {

            ArrayList<KeyboardShortcutDTO> shortcuts = new ArrayList<KeyboardShortcutDTO>();
            KeyboardShortcutDTO shortcut = new KeyboardShortcutDTO("CTRL+K", "SFSM", "Navigates to SFSM screen", 0);
            shortcuts.add(shortcut);

            try (// Mock SystemInfo
                 MockedStatic<SystemInfo> mockedSystemInfo = Mockito.mockStatic(SystemInfo.class);
                 // Mock SessionHelper
                 MockedStatic<SessionHelper> mockedSessionHelper = Mockito.mockStatic(SessionHelper.class);
                 // Mock Repository
                 MockedStatic<KeyboardShortcutRepository> mockedRepository = Mockito.mockStatic(KeyboardShortcutRepository.class);) {

                // Mock SessionHelper getSystemInfo() method
                mockedSessionHelper.when(() -> SessionHelper.getSystemInfo(null, 1)).thenReturn(new SystemInfo());
                // Mock SystemInfo getUserID() method
                mockedSystemInfo.when(() -> SystemInfo.getUserID()).thenReturn("jw86694");
                // Mock Repository retrieveKeyboardShortcutsList() method
                mockedRepository.when(() -> KeyboardShortcutRepository.retrieveKeyboardShortcutsByUser("jw86694")).thenReturn(shortcuts);

                KeyboardShortcutSrv service = new KeyboardShortcutSrv(repoMock);
                KeyboardShortcutSrv spyService = Mockito.spy(service);

                // Call the method, then convert return value from ResultDTO into List
                List<KeyboardShortcutDTO> result = service.getKeyboardShortcutsList(mockedRequest).getKeyboardShortcutsList();

                // Compare keys of first shortcutDTO from list, to expected value
                assertEquals("CTRL+K", result.get(0).getKeys());
            }
        }

    @Test
    void secondSolution() {

        ArrayList<KeyboardShortcutDTO> shortcuts = new ArrayList<KeyboardShortcutDTO>();
        KeyboardShortcutDTO shortcut = new KeyboardShortcutDTO("CTRL+K", "SFSM", "Navigates to SFSM screen", 0);
        shortcuts.add(shortcut);

        try (// Mock SystemInfo
             MockedStatic<SystemInfo> mockedSystemInfo = Mockito.mockStatic(SystemInfo.class);
             // Mock SessionHelper
             MockedStatic<SessionHelper> mockedSessionHelper = Mockito.mockStatic(SessionHelper.class);
             // Mock Repository
             MockedStatic<KeyboardShortcutRepository> mockedRepository = Mockito.mockStatic(KeyboardShortcutRepository.class);
             // Mock KeyboardShortcutResultDTO construction
             MockedConstruction mockedConstructor = mockConstruction(KeyboardShortcutResultDTO.class, (mock, context) -> {
                         // Mocking the ResultDTO's method for converting to a list - is definitely cheating
                         //when(mock.getKeyboardShortcutsList()).thenReturn(shortcuts);

                     }
             )) {
            // Mock SessionHelper getSystemInfo() method
            mockedSessionHelper.when(() -> SessionHelper.getSystemInfo(null, 1)).thenReturn(new SystemInfo());
            // Mock SystemInfo getUserID() method
            mockedSystemInfo.when(() -> SystemInfo.getUserID()).thenReturn("j123");
            // Mock Repository retrieveKeyboardShortcutsList() method
            mockedRepository.when(() -> KeyboardShortcutRepository.retrieveKeyboardShortcutsByUser("j123")).thenReturn(shortcuts);

            KeyboardShortcutSrv service = new KeyboardShortcutSrv(repoMock);

            // Call the method, then convert return value from ResultDTO into List
            List<KeyboardShortcutDTO> result = service.getKeyboardShortcutsList(mockedRequest).getKeyboardShortcutsList(); // The method in ResultDTO is not returning the list of shortcuts

            //verify(mock).setKeyboardShortcutsList(null);
            //assertEquals(1,0);

            // Compare keys of first shortcutDTO from list, to expected

            assertEquals("j123", SystemInfo.getUserID());
            assertEquals(1, KeyboardShortcutRepository.retrieveKeyboardShortcutsByUser("j123").size());
            assertNotNull(result);


            //assertEquals(1, result.size());
            //assertEquals("CTRL+K", result.get(0).getKeys());
        }
    }*/


    /*
        @Test
        void testRange() {
            assertEquals(StaticUtils.range(1, 2), 3);

            try (MockedStatic<StaticUtils> utilities = Mockito.mockStatic(StaticUtils.class)) {
                utilities.when(() -> StaticUtils.range(1, 2)).thenReturn(50);
                assertEquals(50, StaticUtils.range(1, 2));
            }

            assertEquals(StaticUtils.range(1, 2), 3);
            //assertEquals("0", "1"); // This fails correctly
        }

    @Test
    void testConstructor() {
        assertEquals(StaticUtils.range(1, 2), 3);

        try (MockedConstruction<KeyboardShortcutResultDTO> mockedConstructor = mockConstruction(KeyboardShortcutResultDTO.class, (mock, context) -> {

        })) {

            KeyboardShortcutResultDTO mockedKeyboardShortcutResultDTO = new KeyboardShortcutResultDTO();
            when(mockedKeyboardShortcutResultDTO.getString()).thenReturn("Goodbye");

            KeyboardShortcutSrv service = new KeyboardShortcutSrv(repoMock);

            KeyboardShortcutResultDTO result = service.getKeyboardShortcutsList(mockedRequest);

            //assertEquals("Goodbye", mockedKeyboardShortcutResultDTO.getString());
            //assertEquals("0", "1"); // This fails correctly
            //verify(mock).setKeyboardShortcutsList(null);

        }
    }

    @Test
    void testWithAnswer() {
        KeyboardShortcutResultDTO dummyInstance = mock(KeyboardShortcutResultDTO.class);
        ArrayList<KeyboardShortcutDTO> shortcuts = new ArrayList<KeyboardShortcutDTO>();
        KeyboardShortcutDTO shortcut = new KeyboardShortcutDTO("CTRL+K", "SFSM", "Navigates to SFSM screen", 0);
        shortcuts.add(shortcut);

        try (// Mock SystemInfo
             MockedStatic<SystemInfo> mockedSystemInfo = Mockito.mockStatic(SystemInfo.class);
             // Mock SessionHelper
             MockedStatic<SessionHelper> mockedSessionHelper = Mockito.mockStatic(SessionHelper.class);
             // Mock Repository
             MockedStatic<KeyboardShortcutRepository> mockedRepository = Mockito.mockStatic(KeyboardShortcutRepository.class);
                // mock the construction of any instances of TestClass to force it to answer with a specific mock
                MockedConstruction<KeyboardShortcutResultDTO> mocked = Mockito.mockConstructionWithAnswer(KeyboardShortcutResultDTO.class,
                        new Answer() {
                            @Override
                            public Object answer(InvocationOnMock invocation) throws Throwable {
                                // we have override all the behaviours of our mock manually
                                if (invocation.getMethod().equals(KeyboardShortcutResultDTO.class.getMethod("getKeyboardShortcutsList"))) {
                                    return shortcuts;
                                }
                                else if (invocation.getMethod().equals(KeyboardShortcutResultDTO.class.getMethod("setKeyboardShortcutsList", List.class))) {
                                    return null;
                                }
                                return dummyInstance;
                            }

                        })) {
            // Mock SessionHelper getSystemInfo() method
            mockedSessionHelper.when(() -> SessionHelper.getSystemInfo(null, 1)).thenReturn(new SystemInfo());
            // Mock SystemInfo getUserID() method
            mockedSystemInfo.when(() -> SystemInfo.getUserID()).thenReturn("j123");
            // Mock Repository retrieveKeyboardShortcutsList() method
            mockedRepository.when(() -> KeyboardShortcutRepository.retrieveKeyboardShortcutsByUser("j123")).thenReturn(shortcuts);

            KeyboardShortcutSrv service = new KeyboardShortcutSrv(repoMock);

            KeyboardShortcutResultDTO result = service.getKeyboardShortcutsList(mockedRequest);

            //dummyInstance.setKeyboardShortcutsList(KeyboardShortcutRepository.retrieveKeyboardShortcutsByUser("j123"));

            verify(dummyInstance).setKeyboardShortcutsList(shortcuts);
        }
    }
*/

/*
    @Test
    void testBoth() {
        try (MockedStatic<StaticUtils> utilities = Mockito.mockStatic(StaticUtils.class);
             MockedConstruction mockedConstructor = mockConstruction(KeyboardShortcutResultDTO.class, (mock, context) -> {
                         when(mock.getString()).thenReturn("Goodbye");
                         utilities.when(() -> StaticUtils.range(1, 2)).thenReturn(50);

                         //assertEquals("Goodbye50", mock.getString() + StaticUtils.range(1, 2));
                        assertEquals(0, 1); // This does not fail correctly
                     }

             )) { }

        //assertEquals(0, 1); // This fails correctly
    }
*/
}
