<?php

$objhorainicio= new Datetime("{$_POST['horainicio']});
$objhorafim= new Datetime("{$_POST['horafim']});
/*$objIntervalo= new Datetime("{$_POST['intervalo']}")*/
$objIntervalo = $objhorainicio->diff($objhorafim);
var_dump($objIntervalo);
