
extends Control

@onready var boton_jugar = $MarginContainer/HBoxContainer/VBoxContainer/Jugar as Button
@onready var boton_opciones = $MarginContainer/HBoxContainer/VBoxContainer/Opciones as Button
@onready var boton_salir = $MarginContainer/HBoxContainer/VBoxContainer/Salir as Button
@onready var empezar_juego = preload("res://TitleScreen/menu.tscn") as PackedScene
@onready var margin_container: MarginContainer = $MarginContainer


func _ready():
	randomize()  # Llama a randomize() una vez al inicio del juego

#func _ready():
	#handle_connecting_signals()

func _on_jugar_pressed():
	get_tree().change_scene_to_file("res://World/world.tscn")

func _on_opciones_pressed():
	get_tree().change_scene_to_file("res://OptionsMenu/options_menu.tscn")


func _on_salir_pressed():
	get_tree().quit()



#func handle_connecting_signals():
	#boton_jugar.button_down.connect(_on_jugar_pressed())
	#boton_opciones.button_down.connect(_on_opciones_pressed())
	#boton_salir.button_down.connect(_on_salir_pressed())
