using UnityEngine;
using System.Collections;

public class goahead : MonoBehaviour {
	public Animator animator;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame

		void OnCollisionEnter (Collision col)
		{
			if(col.gameObject.tag == "person")
		{print ("detected");
			animator.SetBool ("walk", true);
			}
		}
	}

