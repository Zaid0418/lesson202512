public class BlackoutSkull {

    public static void main(String[] args) throws InterruptedException {

        String blackout = "\n\n\n\n\n\n\n\n\n";

        String skullNormal =
                "      _____      \n" +
                "     /     \\     \n" +
                "    |  o o  |    \n" +
                "    |   ^   |    \n" +
                "    |  ---  |    \n" +
                "     \\_____/     \n";

        String skullLaugh =
                "      _____      \n" +
                "     /     \\     \n" +
                "    |  o o  |    \n" +
                "    |   ^   |    \n" +
                "    | \\___/ |    \n" +
                "     \\_____/     \n";

        // 背景黒・文字白
        setBlackBackground();

        // ブラックアウト
        clearConsole();
        System.out.print(blackout);
        Thread.sleep(1200);

        // 出現 → 笑う
        for (int i = 0; i < 6; i++) {
            clearConsole();
            System.out.println(skullNormal);
            Thread.sleep(400);

            clearConsole();
            System.out.println(skullLaugh);
            Thread.sleep(400);
        }

        resetColor();
    }

    // 画面クリア
    private static void clearConsole() {
        System.out.print("\033[H\033[2J");
        System.out.flush();
    }

    // 背景黒・文字白
    private static void setBlackBackground() {
        System.out.print("\033[40m"); // 背景黒
        System.out.print("\033[37m"); // 文字白
    }

    // 色を元に戻す
    private static void resetColor() {
        System.out.print("\033[0m");
    }
}

