import { department } from "./../models/departments";
import { supplier } from "./../models/suppliers";
import express, { Request, Response } from "express";
import { Dashboard } from "../services/dashboard";

const dashboard = new Dashboard();

const mostCommonProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await dashboard.showmostCommonProducts(
      Number(req.query.rows)
    );
    res.json(products);
  } catch (error) {
    throw new Error(`cannot show the products ${error}`);
  }
};

const mostCommonSuppliers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const suppliers = await dashboard.showmostCommonSuppliers(
      Number(req.query.rows)
    );
    res.json(suppliers);
  } catch (error) {
    throw new Error(`cannot show the suppliers ${error}`);
  }
};

const averagePriceInDepartments = async (
  _: Request,
  res: Response
): Promise<void> => {
  try {
    const prices = await dashboard.showAveragePriceInDepartments();
    res.json(prices);
  } catch (error) {
    throw new Error(`cannot show the prices ${error}`);
  }
};

const mostCommonDepartments = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const departments = await dashboard.showCommonDepartments(
      Number(req.query.rows)
    );
    res.json(departments);
  } catch (error) {
    throw new Error(`cannot show the departments ${error}`);
  }
};

export const dashboardRoutes = (app: express.Application) => {
  app.get("/common/products", mostCommonProducts);
  app.get("/common/suppliers", mostCommonSuppliers);
  app.get("/common/departments", mostCommonDepartments);
  app.get("/departments_avg", averagePriceInDepartments);
};
