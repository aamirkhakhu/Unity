#pragma strict

var Weapon01 : GameObject;
var Weapon02 : GameObject;

function Update () {
	if(Input.GetKeyDown(KeyCode.Q))
	{
		SwapWeapon();
	}
}

function SwapWeapon()
{
	if(Weapon01.active == true)
	{
		Weapon01.SetActive(false);
		Weapon02.SetActive(true);
	}
	else
	{
		Weapon01.SetActive(true);
		Weapon02.SetActive(false);
	}
}