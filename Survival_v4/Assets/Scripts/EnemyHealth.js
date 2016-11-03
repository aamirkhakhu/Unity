#pragma strict

var health = 100;

function Update()
{
	if(health <= 0)
	{
		Dead();
	}
}

function ApplyDamage(TheDamage : int)
{
	health -= TheDamage;
}

// Destroying the game Object (Enemy)
function Dead()
{
	Destroy(gameObject);
}