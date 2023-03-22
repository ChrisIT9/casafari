import axios from "axios";
import { Data } from "./models/Apartment";
import { Feed, FeedPayload, FeedResponseOnCreate } from "./models/Feed";
import { Type } from "./models/Types";
const baseUrl = "https://api.casafari.com/v1";
const config = { headers: { Authorization: "" } };

export const setToken = (token: string) => {
  config.headers.Authorization = token;
};

export const getTypes = async () =>
  (await axios.get<Type[]>(`${baseUrl}/references/types`, config)).data;

export const getFeeds = async () =>
  (await axios.get<Feed[]>(`${baseUrl}/listing-alerts/feeds`, config)).data;

export const createFeed = async (body: FeedPayload) =>
  (
    await axios.post<FeedResponseOnCreate>(
      `${baseUrl}/listing-alerts/feeds`,
      body,
      config
    )
  ).data;

export const deleteFeed = async (id: number) =>
  (
    await axios.delete<{ success: boolean }>(
      `${baseUrl}/listing-alerts/feeds/${id}`,
      config
    )
  ).data;

export const getFeed = async (id: number) =>
  (await axios.get<Data>(`${baseUrl}/listing-alerts/feeds/${id}`, config)).data;