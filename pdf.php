/if($_GET['pdfsave'] == "true"){
lafonctionphpquetuveuxappeler()

<?php
require "vendor/autoload.php";
use mikehaertl\wkhtmlto\Pdf;
if($_GET['pdfsave']== "true"){ 
        function getPDF(){     
          // You can pass a filename, a HTML string, an URL or an options array to the constructor
          $pdf = new Pdf('whiteboard.php');

          // On some systems you may have to set the path to the wkhtmltopdf executable
          // $pdf->binary = 'C:...';
  
          if (!$pdf->saveAs('whiteboard.php')) {
              $error = $pdf->getError();
              // ... handle error here
          };
    }
}


?>