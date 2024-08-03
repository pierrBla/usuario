const pool = require("../config/conexion");

exports.getBooks = (req, res) => {
  const sql = "SELECT * FROM usuario;";
  pool.query(sql, (err, result, fields) => {
    if(err) {
      res.json({ message: "Error en la consulta" });
    }
    res.json(result)
  })
}

exports.getBookById = (req, res) => {
  const ID = req.params.id;

  const sql = "SELECT * FROM usuario WHERE id=?";
  pool.query(sql,[ID], (err, result, fields) => {
    if(err) {
      res.json({ message: "Error en la consulta" });
    }
    res.json(result)
  })
}

exports.createBook = (req, res) => {
  const values = Object.values(req.body)

  const sql = "INSERT INTO usuario(dni, nombre, apellido) VALUES(?, ?, ?)";
  pool.query(sql, values, (err, result, fields) => {
    if(err) {
      res.json({ message: "Error al guardar en BD" });
    }
    res.json({message: "Nuevo usuario agregado"})
  })
}

exports.updateBookById = (req, res) => {
  const values = Object.values(req.body);
  const ID = req.params.id;

  const sql = "UPDATE usuario SET dni=?, nombre=?, apellido=? WHERE id=?";
  pool.query(sql, [...values, ID], (err, result, fields) => {
    if(err) {
      res.json({ message: "Error al actualizar" });
    }
    res.json({message: "usuario actualizado"})
  })
}

exports.deleteBookById = (req, res) => {
  const ID = req.params.id;

  const sql = "DELETE FROM usuario WHERE id=?";
  pool.query(sql, ID, (err, result, fields) => {
    if(err) {
      res.json({ message: "Error al eliminar" });
    }
    res.json({message: "Un usuario eliminado"})
  })
}