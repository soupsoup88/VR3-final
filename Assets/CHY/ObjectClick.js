#pragma strict

var charactor : GameObject; 

function Start () {

}

function Update () {

}

function OnMouseClick() {
 	var teleportPosition : Vector3;

	if(gameObject.name == "Bus")
		charactor.GetComponent.<InformationMode>().mode = 1;
	if(gameObject.name == "Subway")
		charactor.GetComponent.<InformationMode>().mode = 2;
	if(gameObject.name == "BJwest")
		charactor.GetComponent.<InformationMode>().mode = 3;

	if(charactor.GetComponent.<InformationMode>().mode == 0 || charactor.GetComponent.<InformationMode>().mode == 1)
	{
		teleportPosition = Vector3(393.4, 1, 112.1);

		charactor.transform.position.x = teleportPosition.x;
		charactor.transform.position.y = teleportPosition.y;
		charactor.transform.position.z = teleportPosition.z;
	}

	if(charactor.GetComponent.<InformationMode>().mode == 2)
	{
		teleportPosition = Vector3(393.4, 1, 112.1);

		charactor.transform.position.x = teleportPosition.x;
		charactor.transform.position.y = teleportPosition.y;
		charactor.transform.position.z = teleportPosition.z;
	}

	if(charactor.GetComponent.<InformationMode>().mode == 3)
	{
		teleportPosition = Vector3(393.4, 1, 112.1);

		charactor.transform.position.x = teleportPosition.x;
		charactor.transform.position.y = teleportPosition.y;
		charactor.transform.position.z = teleportPosition.z;
	}
	
}

function OnCollisionEnter(col : Collision) {
	var teleportPosition : Vector3;

	if(gameObject.name == "Subway")
	{
		teleportPosition = Vector3(393.4, 1, 112.1);

		charactor.transform.position.x = teleportPosition.x;
		charactor.transform.position.y = teleportPosition.y;
		charactor.transform.position.z = teleportPosition.z;
	}
	if(gameObject.name == "BJwest")
	{
		teleportPosition = Vector3(393.4, 1, 112.1);

		charactor.transform.position.x = teleportPosition.x;
		charactor.transform.position.y = teleportPosition.y;
		charactor.transform.position.z = teleportPosition.z;
	}
}