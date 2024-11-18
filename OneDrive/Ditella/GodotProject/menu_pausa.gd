extends Control


# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	pass

func _input(event):
	if event.is_action_pressed("pause"):
		print("pausado")
		visible = not get_tree().paused
		get_tree().paused = not get_tree().paused


func _on_continuar_pressed() -> void:
	visible = not get_tree().paused
	get_tree().paused = not get_tree().paused


func _on_reiniciar_pressed() -> void:
	get_tree().paused = not get_tree().paused
	get_tree().reload_current_scene()



func _on_salir_pressed() -> void:
	get_tree().paused = not get_tree().paused
	get_tree().change_scene_to_file("res://TitleScreen/menu.tscn")
