extends Area2D

@export var experience = 1

var uno = preload("res://Textures/Items/Gems/uno.png")
var cero = preload("res://Textures/Items/Gems/cero.png")


var target = null
var speed = -1

@onready var sprite = $Sprite2D
@onready var collision = $CollisionShape2D
@onready var sound = $snd_collected

func _ready():
	if randi() % 2 == 0:
		sprite.texture = uno
	else:
		sprite.texture = cero

	# Establece el sprite según la experiencia (si esto sigue siendo necesario)
	if experience >= 5 and experience < 25:
		sprite.texture = uno  # Cambia si necesitas otro sprite aquí, o elimina si no es necesario
	elif experience >= 25:
		sprite.texture = cero  # Cambia si necesitas otro sprite aquí, o elimina si no es necesario

func _physics_process(delta):
	if target != null:
		global_position = global_position.move_toward(target.global_position, speed)
		speed += 2*delta

func collect():
	sound.play()
	collision.call_deferred("set","disabled",true)
	sprite.visible = false
	return experience


func _on_snd_collected_finished():
	queue_free()
