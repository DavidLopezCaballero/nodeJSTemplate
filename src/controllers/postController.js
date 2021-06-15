'use strict'

import * as userService from '../services/postService'

export async function getPosts(req, res) {
  const posts = await userService.getPosts()

  response(res, posts.status, posts.data || posts.message)
}

export async function getPost(req, res) {
  const id = req.params.id

  const post = await userService.getPost(id)

  response(res, post.status, post.data || post.message)
}

export async function createPost(req, res) {
  const postBody = req.body

  const post = await userService.createPost(postBody)

  response(res, post.status, post.data || post.message)
}

export async function updatePost(req, res) {
  const id = req.params.id;
  const postBody = req.body;

  const post = await userService.updatePost(id, postBody)

  response(res, post.status, post.data || post.message)
}

export async function deletePost(req, res) {
  const id = req.params.id;

  const post = await userService.deletePost(id)

  response(res, post.status, post.data || post.message)
}

const response = (res, status, data) => {
  res.status(status || 500).send(data)
}