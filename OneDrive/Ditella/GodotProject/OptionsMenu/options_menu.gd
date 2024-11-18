class_name OptionsMenu
extends Control

@onready var atras: Button = $MarginContainer/VBoxContainer/Atras as Button



func _on_atras_pressed() -> void:
	get_tree().change_scene_to_file("res://TitleScreen/menu.tscn")
