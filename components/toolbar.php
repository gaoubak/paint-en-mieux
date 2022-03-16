<div class="tool-bar">
    <div class="tools">
        <a href="dashboard.php" class="tool shapes" id="home">
            <img src="./styles/img/home.svg" alt="select" />
        </a>
        <?php
        $host = $_SERVER['SERVER_NAME'] . $_SERVER["REQUEST_URI"];
        if ($host == $_SERVER['SERVER_NAME'] . "/paint-en-mieux/whiteboard.php") {
            require "./components/whiteboard.nav.php";
        } elseif ($host == $_SERVER['SERVER_NAME'] . "/paint-en-mieux/blackboard.php") {
            print_r('');
        }
        ?>
    </div>
</div>