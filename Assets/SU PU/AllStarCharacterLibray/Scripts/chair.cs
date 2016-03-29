using UnityEngine;
using UnityEngine.EventSystems;

public class chair : MonoBehaviour, IPointerClickHandler {




	public GameObject sphere;

	public void OnPointerClick(PointerEventData eventData)
	{




		sphere.transform.position = new Vector3 (transform.position.x, transform.position.y+4.0f, transform.position.z+4.5f);

		sphere.transform.localRotation = Quaternion.Euler(new Vector3 (0.0f, 180.0f, 0.0f));
	

	}

	void Update()
	{



	}




} 

