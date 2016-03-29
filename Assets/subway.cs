using UnityEngine;
using System.Collections;

public class subway : MonoBehaviour {

	// Use this for initialization
	public Animator animator;
	public Animator animator1;
	void OnTriggerEnter(Collider other) 
	{
		if (other.gameObject.CompareTag ("cube"))
		{
			print("detected");
			animator.SetBool ("door", true);
			animator1.SetBool ("door1", true);
		}
	}

	// Update is called once per frame
	
}
