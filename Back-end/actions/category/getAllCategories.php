<?php
require_once "../../config/security.php";
require_once "../../config/db.php";

// Set default success response to false in case of unlegitimate API call
$response["success"] = false;

// Check if the API call is legitimate
if($isAllowed) {
    // Check if the table to lookup for is given
    if (isset($json["table"]) && $json["table"] === "categories"){

        // Create new instance of class Database to interact with the database
        $db = new Database();
        $resData = $db->getAllCategoriesWithImage();
        
        if($resData) {
            $response["success"] = true;
            $response["data"] = $resData;
        } else {
            $response["error"] = "Veuillez indiquer dans les données envoyés la table dans laquelle faire cette recherche.";
        }
    } else {
        $response["error"] = "La clé API n'est pas fournie ou est incorrecte.";
    }
}

// Print the response in the json format
echo json_encode($response);