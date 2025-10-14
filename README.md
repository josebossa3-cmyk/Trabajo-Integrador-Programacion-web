# 🧩 Trabajo Integrador - Programación Web

Repositorio del trabajo integrador de la materia **Programación Web**.  
Aquí se encuentra el código fuente, estilos y recursos del proyecto grupal.

---

## 🧭 Clonar el repositorio

Abrí una terminal en el directorio donde queres guardar el proyecto y ejecutá:

```bash
git clone https://github.com/josebossa3-cmyk/Trabajo-Integrador-Programacion-web.git
```

Despues, en la terminal pone esto para acceder:
```bash
cd Trabajo-Integrador-Programacion-web
```

---

## ⚙️ Configuración inicial

Verificá que estés en la rama principal:
```bash
git branch
```
Debería mostrar:
```
* main
```

Si no estás en `main`, cambiá con:
```bash
git checkout main
```

---

## 💻 Flujo de trabajo con Git

### 🔹 1. Ver el estado actual
Antes de hacer cualquier cambio o commit:
```bash
git status
```

Muestra qué archivos fueron modificados, agregados o eliminados.

---

### 🔹 2. Agregar archivos al commit

Para agregar **todos los cambios**:
```bash
git add .
```

O para agregar un archivo específico:
```bash
git add nombreDelArchivo.ext
```

---

### 🔹 3. Crear un commit con un mensaje

```bash
git commit -m "Descripción de los cambios realizados"
```

Ejemplo:
```bash
git commit -m "Agregué el formulario de contacto y corregí estilos del footer"
```

---

### 🔹 4. Subir los cambios a GitHub

```bash
git push origin main
```

💡 Si es tu primer push, te van a pedir tu usuario y **token personal** de GitHub.

---

### 🔹 5. Actualizar tu repositorio local

Antes de empezar a trabajar o subir nuevos cambios, **siempre actualizá tu copia local**:

```bash
git pull origin main
```

Esto descarga los cambios y evita conflictos.

---

## 🧩 Comandos útiles

| Acción | Comando |
|--------|----------|
| Ver cambios pendientes | `git status` |
| Ver historial de commits | `git log --oneline` |
| Descartar cambios locales | `git checkout -- nombreDelArchivo` |
| Sincronizar con el repo remoto | `git pull origin main` |
| Subir cambios locales | `git push origin main` |

---

## 👥 Integrantes del equipo

- **José Bossa**  
- **Jesús Emanuel García**

---

📌 **Repositorio oficial:**  
[https://github.com/josebossa3-cmyk/Trabajo-Integrador-Programacion-web](https://github.com/josebossa3-cmyk/Trabajo-Integrador-Programacion-web)
