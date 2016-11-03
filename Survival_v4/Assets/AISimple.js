var Distance;
var Target : Transform;
var lookAtDistance = 25.0;
var attackRange = 15.0;
var moveSpeed = 5.0;
var Dampion = 6.0;

function Update() 
{
	// measure the distance between the enemy and the player
	Distance = Vector3.Distance(Target.position, transform.position);
	
	if(Distance < lookAtDistance)
	{
		renderer.material.color = Color.yellow;
		LookAt();
	}
	
	if(Distance > lookAtDistance)
	{
		renderer.material.color = Color.green;
	}
	
	if (Distance < attackRange)
	{	
		renderer.material.color = Color.red;
		Attack();
	}
}

function LookAt()
{
	// Enemy will rotate towards us
	var rotation = Quaternion.LookRotation(Target.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * Dampion);
}

function Attack() 
{
	transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
}