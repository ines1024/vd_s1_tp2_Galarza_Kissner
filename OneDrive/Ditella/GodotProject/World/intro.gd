extends Node2D

# Array of textures for the intro images
var intro_images = [preload("res://Textures/Intro/prueba1.png"), preload("res://Textures/Intro/HISTORIA2.png"), preload("res://Textures/Intro/HISTORIA3.png")]
var current_image_index = 0

func _ready():
	# Set the first image
	$TextureRect.texture = intro_images[current_image_index]

func _process(delta):
	# Check if the player pressed the spacebar
	if Input.is_action_just_pressed("ui_accept"):
		current_image_index += 1

		if current_image_index < intro_images.size():
			# Set the next image in the sequence
			$TextureRect.texture = intro_images[current_image_index]
		else:
			# If all images have been shown, go to the main menu
			get_tree().change_scene_to_file("res://TitleScreen/menu.tscn")
