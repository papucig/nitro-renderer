export class DisconnectReasonEnum
{
    public static readonly LOGOUT: number = 0;
    public static readonly JUST_BANNED: number = 1;
    public static readonly CONCURRENT_LOGIN: number = 2;
    public static readonly CONNECTION_LOST_TO_PEER: number = 3;
    public static readonly AVATAR_IDENTITY_CHANGE: number = 4;
    public static readonly REMOVE_FURNITURE_TOOL: number = 5;
    public static readonly STILL_BANNED: number = 10;
    public static readonly DUAL_LOGIN_BY_USERID: number = 11;
    public static readonly HOTEL_CLOSED: number = 12;
    public static readonly DUAL_LOGIN_BY_IP: number = 13;
    public static readonly PEER_CONNECTION_MISSING: number = 16;
    public static readonly NO_LOGIN_PERMISSION: number = 17;
    public static readonly DUPLICATE_CONNECTION: number = 18;
    public static readonly HOTEL_CLOSING: number = 19;
    public static readonly INCORRECT_PASSWORD: number = 20;
    public static readonly INVALID_LOGIN_TICKET: number = 22;
    public static readonly VERSION_CHECK_URL: number = 23;
    public static readonly VERSION_CHECK_PROPERTY: number = 24;
    public static readonly VERSION_CHECK_MACHINE_ID: number = 25;
    public static readonly NO_MESSENGER_SESSION: number = 26;
    public static readonly USER_NOT_FOUND: number = 27;
    public static readonly CRYPTO_NOT_INITIALIZED: number = 28;
    public static readonly DEV_CRYPTO_NOT_ALLOWED: number = 29;
    public static readonly DUPLICATE_UUID_DETECTED: number = 100;
    public static readonly OLD_SESSION_IN_PROXY: number = 101;
    public static readonly PUBLIC_KEY_NOT_NUMERIC: number = 102;
    public static readonly PUBLIC_KEY_TOO_SHORT: number = 103;
    public static readonly SOCKET_READ_GENERIC: number = 104;
    public static readonly SOCKET_READ_FIRST_BYTE: number = 105;
    public static readonly SOCKET_READ_LENGTH: number = 106;
    public static readonly SOCKET_READ_BODY: number = 107;
    public static readonly SOCKET_READ_POLICY: number = 108;
    public static readonly SOCKET_IO_EXCEPTION: number = 109;
    public static readonly SOCKET_WRONG_CRYPTO: number = 110;
    public static readonly PROXY_RUNTIME_EXCEPTION: number = 111;
    public static readonly IDLE_CONNECTION: number = 112;
    public static readonly PONG_TIMEOUT: number = 113;
    public static readonly IDLE_CONNECTION_NOT_AUTH: number = 114;
    public static readonly IDLE_CONNECTION_NO_USER_ID: number = 115;
    public static readonly WRITE_CLOSED_CHANNEL: number = 116;
    public static readonly SOCKET_WRITE_EXCEPTION_1: number = 117;
    public static readonly SOCKET_WRITE_EXCEPTION_2: number = 118;
    public static readonly SOCKET_WRITE_EXCEPTION_3: number = 119;
}
