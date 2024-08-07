<?php
require_once "../../config/security.php";
require_once "../../config/db.php";

// Set default success response to false in case of unlegitimate API call
$response["success"] = false;

// Check if the API call is legitimate
if($isAllowed) {
    // Check if the input variables are set
    if(isset($json["table"]) && isset($json["id"])) {
        $db = new Database();
        $resData = $db->getProductsFromCategory($json["id"]);
        
        if($resData) {
            $response["success"] = true;
            $response["data"] = $resData;
        } else {
            $response["error"] = "Veuillez indiquer dans les données envoyés la table dans laquelle faire cette recherche.";
        }
    } else {
        $response["error"] = "Veuillez indiquer toutes les données nécessaires à ce traitement.";
    }
} else {
    $response["error"] = "La clé API n'est pas fournie ou est incorrecte.";
}

// Print the response in the json format
echo json_encode($response);