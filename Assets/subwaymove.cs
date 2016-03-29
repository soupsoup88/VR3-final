using UnityEngine;
using System.Collections;

public class subwaymove : MonoBehaviour {
	public Animator animator;
	// Use this for initialization
	public void move () {
		animator.SetBool ("move1", true);
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
