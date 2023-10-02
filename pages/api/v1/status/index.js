function status(request, response) {
  response.status(200).json({ chave: "status page" });
}

export default status;