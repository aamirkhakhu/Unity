#pragma strict


var TheDamage : int = 50;
var Distance : float;
var MaxDistance : float = 1.5;
var TheSystem : Transform;

function Update() 
{
	if(Input.GetButtonDown("Fire1"))
	{
		// Attack animation clip
		animation.Play("MaceAttack");
		AttackDamage();	
	}
	
//	if(TheMaze.animation.isPlaying == false)
//	{
//		TheMaze.animation.CrossFade("Idle");
//	}
//	
//	if(Input.GetKey(KeyCode.LeftShift))
//	{
//		TheMaze.animation.CrossFade("Sprint");
//	}
//	
//	if(Input.GetKeyUp(KeyCode.LeftShift))
//	{
//		TheMaze.animation.CrossFade("Idle");
//	}
}

function AttackDamage() 
{
	var hit : RaycastHit;
	// Attack function
	if(Physics.Raycast(TheSystem.transform.position, TheSystem.transform.TransformDirection(Vector3.forward), hit))
	{
		Distance = hit.distance;
		if(Distance < MaxDistance)
		{
			hit.transform.SendMessage("ApplyDamage", TheDamage, SendMessageOptions.DontRequireReceiver);
		}
	}
}