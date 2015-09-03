using UnityEngine;
using System.Collections;

public class Stallker : MonoBehaviour {
	public float speed = 0;
	public Transform target;
	
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		transform.LookAt(target);
		transform.position = Vector3.MoveTowards(transform.position, target.transform.position, speed);
	}
}