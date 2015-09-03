using UnityEngine;
using System.Collections;

public class HealthBar : MonoBehaviour {
	
	public int maxHealth = 100;
	public static int curHealth = 100;
	public static int score = 0;
	
	
	
	public float healthBarLength;
	
	
	// Use this for initialization
	void Start () {
		
		healthBarLength = Screen.width /2;
		
	}
	
	// Update is called once per frame
	void Update () {
		
		AddjustCurrentHealth(0);
		
	}
	
	void OnGUI(){
		
		GUI.Box (new Rect(1240,540, healthBarLength-600, 20), curHealth + "/" + maxHealth);
		GUI.Box (new Rect(1180, 560, healthBarLength-500,20), "Score : " + score);
		
	}
	
	public void AddjustCurrentHealth(int adj){
		
		curHealth += adj;
		
		if(curHealth <0)
			curHealth = 0;
		
		if(curHealth > maxHealth)
			curHealth = maxHealth;
		
		if(maxHealth <1)
			maxHealth = 1;
		
		
		healthBarLength =(Screen.width /2) * (curHealth / (float)maxHealth);
		
	}
}